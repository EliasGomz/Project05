import React from "react";
import NewApi from '../AxiosInstans'

export const Get = (path) => {
return NewApi.get(path).then(res => res.data).catch(err => console.log(err));
}


export const Post = (path, data) => {
return NewApi.post(path, data).then(res => console.log(res.data)).catch(err => console.log(err));
}
