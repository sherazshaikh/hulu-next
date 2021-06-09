
const HeaderItem = ({title, Icon}) => {
    return (
        <div className="flex flex-col items-center cursor-pointer w-20  hover:text-white group">
            <Icon className="h-8 mb-1  group-hover:animate-bounce " />
            <p className="tracking-widest opacity-0 select-none group-hover:opacity-100">{title}</p>
        </div>
    ) 
}

export default HeaderItem
