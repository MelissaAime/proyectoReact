import { BsInstagram, BsFacebook, BsEmojiWinkFill } from 'react-icons/bs';

export const Footer = () => {
    return (
        <footer className="style-footer text-center">
            <div className="container my-4">
                
                <BsInstagram/>
                <BsFacebook/>

                <p>Continuará...</p>
                <BsEmojiWinkFill/>
            </div>

        </footer>
    )
}