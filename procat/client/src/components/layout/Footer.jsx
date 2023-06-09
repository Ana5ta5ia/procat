import "./footer.sass"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="wrapper">
                <h1 className="footer__logo">Eacycle</h1>
                <div className="footer__author">
                <a href="https://github.com/Ana5ta5ia" className="footer__author-link" target="_blank"></a>
                    <h6 className="footer__author-signature">
                        This site has been powered by Anastasia.
                        All right reserved
                    </h6>
                </div>
            </div>

        </footer>
    )

}

export default Footer