import express, { Express, Router, Request, Response } from 'express'
import axios from 'axios'
// 引入中间件，解决本地跨区问题
const app: Express = express()
app.use('*',(req,res,next)=>{
    res.header('Access-Control-Allow-Origin', '*')
    next()
})
const router: Router = express.Router()

app.use('/api', router)

router.get('/list', async (req: Request, res: Response) => {
    // 数据接口为 腾讯新闻的新冠实时数据来源
    const result = await axios.post('https://api.inews.qq.com/newsqa/v1/query/inner/publish/modules/list?modules=statisGradeCityDetail,diseaseh5Shelf')
    res.json({
        // 将数据进行展开
        ...result.data.data
    })
})

// 启动服务
app.listen(3333,()=>{
    console.log('success server runs on http://localhost:3333')
})