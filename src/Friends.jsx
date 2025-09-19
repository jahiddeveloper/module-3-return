import { use } from "react"

export default function Friends({friendPromise}) {

    const friend = use(friendPromise);
    console.log(friend)

    return(
        <div style={userStyle}>
            <h3>Friends : {friend}</h3>
        </div>
    )
}