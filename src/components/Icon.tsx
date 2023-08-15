import sprite from '../assets/images/sprite.svg'

const Icon = () => {
    return (
        <svg width="24px" height="24px" stroke="#4B5563" fill="none">
            <use xlinkHref={`${sprite}#light-mode`}/>
        </svg>
    )
}

export default Icon