import './MainContent.scss'

export const MainContent = ({titulo, texto}) => {
    
    return (

        <main className="main-content">
            <h2>{titulo}</h2>
            <p>{texto}</p>
        </main>
    )
}
