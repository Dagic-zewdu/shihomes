import React, { Component } from 'react'
import ReactPlayer from 'react-player'
class Step2 extends Component {
    state={
  file:[],
  Vfile:[],
  Images : [],
  urls : [],
  Ilength: 0,
  counter:0,
  video:[],
    }
    change=(e)=>{
        if(e.target.id==='Images'){
           const targetImages = [...e.target.files]
        const jpeg=targetImages.filter(f=>{
            return f.type === 'image/jpeg'
        })
        const png=targetImages.filter(f=>{
            return f.type === 'image/png'
        })
        const I=[...jpeg,...png]
         var newImages = []
         const n=I.length
         var url=[]
       for(var i=0;i<n;i++){
   newImages=[...newImages,I[i].name]
   url=[...url,URL.createObjectURL(I[i])]
       }
       const Images=[...this.state.Images,...newImages]
       const file=[...this.state.file,...I]
       const urls= [...this.state.urls,...url]
       this.setState({
           Images,
           Ilength : Images.length,
           file,
           urls
       })    
    }
    else if(e.target.id==='video'){
        const Vfile= [...e.target.files]
        var video=[] 
        const n=Vfile.length
        for (var i=0;i<n;i++){
            video=[...video,Vfile[i].name]
        } 
        this.setState({
    video,
    Vfile
        })   
    }
            } 
            handleclick=(e)=>{
                e.preventDefault();
                var step2='step2'
                var step3 ='step3'
                if(this.props.Loader!==undefined)
              {this.props.Loader(step2)}
              if(this.props.Addfile!==undefined)
              {
                  this.props.Addfile(step3)
              }
            }      
  Remover=(e)=>{
    e.preventDefault();
     const Vfile=[]
      const video=[]
      this.setState({
          Vfile,
          video
      })
  }
    remove=(photo)=>{
  let file=this.state.file.filter(F=>{
      return photo.name!= F.name
  })
  let Images=this.state.Images.filter(I=>{
      return I != photo.name
  })
const Ilength=Images.length
  this.setState({
      file,
      Images,
      Ilength
  })
  
    }
    render() {
        const Count =()=>{
            return(
                 <div className="float-right">
               <p>Images to be uploaded :{this.state.Ilength}</p> 
            </div>
            )
        }
   const Photos=()=>this.state.file.map(u=>{
           return(
             <div className="pics animation all my-3">
                 <button className="" onClick={()=>{this.remove(u)}}>
                 <i className="fa fa-window-close text-dark" aria-hidden="true"></i>
                 </button>
       <img className="img-fluid"  src={URL.createObjectURL(u)}/>
            </div>
           )
       })
       const Video=()=>{
           if(this.state.Vfile.length===0){
               return(
                   <p></p>
               )}
               else{
                return(
                    <div className="card">
                    <button className="" onClick={this.Remover}>
                 <i className="fa fa-window-close text-dark" aria-hidden="true"></i>
                 </button>
                    <ReactPlayer className="card-img-top react-player"
                            url={URL.createObjectURL(this.state.Vfile[0])}
                            width='100%'
                            height ="90%"
                            controls 
                            playing />
                    </div>
                
                            )   
           }
       }
       const Button=()=>{
           if(this.state.Ilength>0){
   return(
                <button className="btn-primary btnn text-white form-control my-2 mx-5" onClick={this.handleclick}>
                    <i className="fas fa-file-upload"></i>Upload
                </button>
         )
           }
           else{
               return(
                   <p></p>
               )
           }
           }
       return (
           <div className="card text-center">
<button className="btn btn-outline-primary text-uppercase mx-5 my-3" data-toggle="collapse" data-target="#photo"><i className="fa fa-image fa-2x"></i>Add photos </button>
  <div className="collapse mx-2" id="photo">
<div className="input-container">
    <i className="fa fa-image fa-3x icon"></i>
    <input className="input-field" type="file" multiple placeholder="Images" id="Images" onChange={this.change} />
 </div>
 <p className="text-warning">Note only .jpg and .png file extension name are supported</p>
  </div>
  <button className="btn btn-outline-primary text-uppercase mx-5 my-3"
   data-toggle="collapse" data-target="#video">
   <i className="fa fa-video fa-2x"></i>
   Add video
   </button>
  <div className="collapse mx-2" id="video">
<div className="input-container">
    <i className="fa fa-video fa-3x icon"></i>
    <input className="input-field" type="file" id="video" onChange={this.change} />
  </div>
  </div>
  {<Count/>}
  <div className="gallery" id="gallery">
{<Photos/>}
</div>
{<Video/>}
{<Button/>}
  </div>
        )
    }
}
export default Step2