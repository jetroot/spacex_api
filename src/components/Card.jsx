
const Card = ({imgUrl, alt, name, yearBuilt}) => {
  return (
    <div className="object-cover rounded-t-md hover:shadow-lg hover:shadow-slate-200">
        <img src={imgUrl ? imgUrl : 'https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg'} alt={alt} className={'object-cover h-96 w-full rounded-t-md'} />
        <div className="bg-white text-black p-2 flex justify-between rounded-b-md border-b-2 border-slate-200">
            <p className="first-letter:capitalize truncate w-7/12">
                {name}
            </p>
            <p className="">
                Built in 
                <span className="font-semibold"> {yearBuilt}</span>
            </p>
        </div>
    </div>
  )
}

export default Card;