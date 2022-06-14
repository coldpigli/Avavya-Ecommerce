const Footer = () => {
  return (
    <section className="footer w-75 flex-vertical children-middle">
    <h1 className="heading2">Download Our App</h1>
    <a href="https://github.com/coldpigli/Avavya-Ecommerce" target="_blank">
    <div className="footer-download flex">
        <div className="download-img">
            <img src="https://ik.imagekit.io/avavya/Avavya-Ecommerce/appstore-btn_G9_HbJEdc.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647588899831" alt="appstore"/>
        </div>
    </div>
    </a>
    <p>Made with <span className="txt-brand-color">	&#10084;</span> by Piyush Das. <a className="txt-brand-color" href="https://github.com/coldpigli">Github</a></p>
</section>
  )
}

export default Footer;