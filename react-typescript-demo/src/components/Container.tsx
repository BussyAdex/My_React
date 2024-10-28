type ContainerProps = {
    styles: React.CSSProperties
    values: string 
}
export const Container = (props: ContainerProps) =>{
    return(
        <div style={props.styles}>
            {props.values}
        </div>
    )
}