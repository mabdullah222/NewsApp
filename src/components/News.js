import React,{Component} from 'react'
import Newsitem from './Newsitem'
export class News extends Component
{
    category=this.props
    key=this.props
    title=this.props
    progress=this.props
    
    constructor()
    {
        super()
        this.state={articles: [], page: 1,totalresults:0}

    }
        
    async componentDidMount()
    {
            let url=`https://newsapi.org/v2/top-headlines?&category=${this.props.category}&apiKey=68ad622d8bd445519937acf1cdbe3e67&page=${this.state.page}&pageSize=10`
            let data=await fetch(url)
            this.props.progress(70);
            let parsedData=await data.json()
            this.props.progress(100);
            this.setState({articles:parsedData.articles,totalresults:parsedData.articles.length})
    }
    HandleUpClick =async ()=>
    {   
        let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=68ad622d8bd445519937acf1cdbe3e67&page=${this.state.page+1}&pageSize=$10`
        console.log(url)
        let data=await fetch(url)
        let parsedData=await data.json()
        this.setState({articles:parsedData.articles,page:this.state.page+1})
    }
    HandleDownClick=async ()=>
    {
        let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=68ad622d8bd445519937acf1cdbe3e67&page=${this.state.page-1}&pageSize=10`
        let data=await fetch(url)
        let parsedData=await data.json()
        this.setState({articles:parsedData.articles,page:this.state.page-1})
    }
    fetchMoreData=async ()=>
    {
        this.setState({page:this.state.page+1})
        let url=`https://newsapi.org/v2/top-headlines?&category=${this.props.category}&apiKey=68ad622d8bd445519937acf1cdbe3e67&page=${this.state.page}&pageSize=10`
        console.log(url)
        let data=await fetch(url)
        let parsedData=await data.json()
        this.setState({articles:this.state.articles.concat(parsedData.articles),totalresults:parsedData.articles.length})


    }
    render(){
        return(
            <div className='container' style={{textAlign:"center"}}>
                <h1>NewsMonkey-{this.props.title}</h1>
                <div class='row'>
                    
                    {this.state.articles.map(function(element)
                    {
                        return <div className='col-md-4'>
                            <Newsitem title={element.title} desc={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
                        </div>
                    })}
                </div>
                <div className='container d-flex justify-content-between my-4'>
                <button type="button" disabled={this.state.page===1?true:false} onClick={this.HandleDownClick} class="btn btn-dark">Previous Page</button>
                <button type="button" disabled={this.state.page*10>this.state.articles.length?true:false} onClick={this.HandleUpClick} class="btn btn-dark">Next Page</button>
                </div>
            </div>
        )
    }
}

export default News