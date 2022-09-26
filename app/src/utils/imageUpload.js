import {postDataAPI} from "./fetchData";

export const checkImage = (file) => {
    let err = ""
    if(!file) return err = "File does not exist."

    if(file.size > 1024 * 1024) // 1mb
    err = "The largest image size is 1mb."

    if(file.type !== 'image/jpeg' && file.type !== 'image/png' )
    err = "Image format is incorrect."
    
    return err;
}


export const imageUpload = async (image) => {
    let imgArr = [];
    for(const item of image){
        const formData = new FormData()

        if(item.camera){
            formData.append("file", item.camera)
        }else{
            formData.append("file", item)
        }
        
        formData.append("name", "efxjficn")
        formData.append("file", "devat-channel")

        const res = await postDataAPI("/upload/",{
            method: "POST",
            body: formData
        })
        
        const data = await res.json()
        imgArr.push({token: data.token, url: data.secure_url})
    }
    return imgArr;
}