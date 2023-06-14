import React,{Component} from 'react'

export class Newsitem extends Component 
{
    render(){
    let{title,imageUrl,newsUrl,desc}=this.props
        return(
                <div className="card my-5 mx-4" style={{width: "18rem"}}>
                <img src={this.props.imageUrl} className="card-img-top" alt='Error Loading Image'/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">{this.props.desc}</p>
                    <a href={this.props.newsUrl} target='_blank' className="btn btn-primary">Open News</a>
                </div>
                </div>
        )
    }
}

export default Newsitem