import user1 from "../assets/avatar/user1.png"
import user2 from "../assets/avatar/user2.png"
import user3 from "../assets/avatar/user3.png"
import user4 from "../assets/avatar/user4.png"
import user5 from "../assets/avatar/user5.png"
import user6 from "../assets/avatar/user6.png"
import user7 from "../assets/avatar/user7.png"
import user8 from "../assets/avatar/user8.png"
import user9 from "../assets/avatar/user9.png"
import user10 from "../assets/avatar/user10.png"
import user11 from "../assets/avatar/user11.png"
import user12 from "../assets/avatar/user12.png"
import user13 from "../assets/avatar/user13.png"
import user14 from "../assets/avatar/user14.png"
import user15 from "../assets/avatar/user15.png"
import user16 from "../assets/avatar/user16.png"
import user17 from "../assets/avatar/user17.png"
import user18 from "../assets/avatar/user18.png"
import user19 from "../assets/avatar/user19.png"
import user20 from "../assets/avatar/user20.png"


const images:any= {
    user1, 
    user2 ,
    user3 ,
    user4 ,
    user5 ,
    user6 ,
    user7 ,
    user8 ,
    user9 ,
    user10,
    user11,
    user12,
    user13,
    user14,
    user15,
    user16,
    user17,
    user18,
    user19,
    user20,
    
}

export default function getImageByKey(key: any) {
    return images[key]
  }
