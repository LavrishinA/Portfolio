import sprite from '../assets/images/sprite.svg'

type IconPropsType = {
    iconId: string
    color?: string
    width?: string
    height?: string
}
const Icon = (props: IconPropsType) => {
    return (
        <svg width={props.width || "24"}
             height={props.height || "24"}
             stroke={props.color || "#4B5563"}
        >
            <use xlinkHref={`${sprite}#${props.iconId}`}/>
        </svg>
    )
}

export default Icon