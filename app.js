const http = require("http")
const {execSync} = require("child_process")
const fs = require("fs")
const path = require("path")

// 递归删除目录
function deleteFolderRecursive(path) {
    if( fs.existsSync(path) ) {
        fs.readdirSync(path).forEach(function(file) {
            const curPath = path + "/" + file;
            if(fs.statSync(curPath).isDirectory()) { // recurse
                deleteFolderRecursive(curPath);
            } else { // delete file
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
    }
}

const resolvePost = req =>
    new Promise(resolve => {
        let chunk = "";
        req.on("data", data => {
            chunk += data;
        });
        req.on("end", () => {
            resolve(JSON.parse(chunk));
        });
    });

http.createServer(async (req, res) => {
    console.log('服务端收到部署请求')
    console.log('请求地址：',req.url)
    if (req.method === 'POST' && req.url === '/') {
      const data = await resolvePost(req);
      const projectDir = path.resolve(`./${data.repository.name}`)
     deleteFolderRecursive(projectDir)
     console.log('删除原有目录成功！');
     
    // 注意！！这里https一定要改成git！！拉取仓库最新代码 https://github.com/edczjw/my-react-project.git
    execSync(`git clone git://github.com/edczjw/${data.repository.name}.git ${projectDir}`,{
        stdio:'inherit',
    })
    console.log('拉取 github 仓库最新代码成功！');
    
     // 复制 Dockerfile 到项目目录
     fs.copyFileSync(path.resolve(`./Dockerfile`), path.resolve(projectDir,'./Dockerfile'))
     console.log('复制 Dockerfile 成功！');

     // 复制 .dockerignore 到项目目录
     fs.copyFileSync(path.resolve(__dirname,`./.dockerignore`), path.resolve(projectDir, './.dockerignore'))
     console.log('复制 .dockerignore 成功！');

      // 创建 docker 镜像
     execSync(`docker build . -t ${data.repository.name}-image:latest `,{
       stdio:'inherit',
       cwd: projectDir
   })
   console.log('创建 docker 新镜像成功！');

    // 销毁 docker 容器
    execSync(`docker ps -a -f "name=^${data.repository.name}-container" --format="{{.Names}}" | xargs -r docker stop | xargs -r docker rm`, {
        stdio: 'inherit',
    })
    console.log('销毁 docker 容器成功！');

    // 创建 docker 容器
    execSync(`docker run -d -p 8002:80 --name ${data.repository.name}-container  ${data.repository.name}-image:latest`, {
        stdio:'inherit',
    })
    console.log('创建 docker 容器成功！');

    console.log('执行成功！')
    res.end('ok')
}
}).listen(3002, () => {
    console.log('server is ready','开始！')

})
