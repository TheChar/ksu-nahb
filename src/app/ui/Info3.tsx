export type iconData = {
    d:string
}

export type Info3Props = {
    name1:string,
    desc1:string,
    icon1:iconData[],
    name2:string,
    desc2:string,
    icon2:iconData[],
    name3:string,
    desc3:string,
    icon3:iconData[]
}

export default function Info3(params: Info3Props) {
    return (
        <div className="min-h-50 grid grid-cols-1 md:grid-cols-3">
            <div>
                {/**Name goes here | params.name */}
                <h4 className="text-3xl text-center my-4">{params.name1}</h4>
                {/**Desc goes here | params.desc */}
                <p className="text-xl text-center my-3 mx-15">{params.desc1}</p>
            </div>
            <div>
                {/**Name goes here | params.name */}
                <h4 className="text-3xl text-center my-4">{params.name2}</h4>
                {/**Desc goes here | params.desc */}
                <p className="text-xl text-center my-3 mx-15">{params.desc2}</p>
            </div>
            <div>
                {/**Name goes here | params.name */}
                <h4 className="text-3xl text-center my-4">{params.name3}</h4>
                {/**Desc goes here | params.desc */}
                <p className="text-xl text-center my-3 mx-15">{params.desc3}</p>
            </div>
        </div>
    )
}