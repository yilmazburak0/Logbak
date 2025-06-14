import { useTranslation } from 'react-i18next';


const Footer = () => {
    const { t } = useTranslation();

    return (
      <>
        <footer>
          <div className="footer max-w-full mx-auto px-4 sm:px-6 bg-gray-100 border-t border-b py-30">
            {/* Top area: Blocks */}
            <div className="flex flex-col lg:flex-row justify-between items-center gap-8 py-8 md:py-12 border-t border-gray-200">
              {/* 1st block */}
              <div className="w-full lg:flex-1">
                <div className="box-border border-b-4 border-blue-900 p-8 bg-gray-200 text-gray-600 text-center rounded-lg xl:w-80 mx-auto">
                  <h3 className="font-bold text-4xl mb-4">Logbak</h3>
                  <div className="text-md font-medium text-gray-600">
                    {t("footer.appDescription")}
                  </div>
                </div>
              </div>

              {/* 2nd block */}
              <div className="w-full lg:flex-1 text-center mx-auto font-bold uppercase text-blue-900">
                <div className="text-xl mb-6">
                  {t("footer.socialMediaTitle")}
                </div>

                <div className="text-md font-medium mb-6">
                  {t("footer.socialMediaDescription")}
                </div>
                <div className="mx-auto text-center mt-2">
                  <ul className="flex justify-center mb-4 md:mb-0 gap-4">
                    {/* X */}
                    <li>
                      <a
                        href="https://x.com/logbak73281"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex justify-center items-center w-10 h-10 text-blue-900 hover:text-gray-500 bg-white rounded-full shadow transition duration-150 ease-in-out"
                        aria-label="X">
                        <svg
                          className="w-5 h-5 fill-current"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.525 3h3.945l-8.62 9.885L22 21h-6.457l-5.07-6.358L4.2 21H.25l9.224-10.57L2 3h6.587l4.725 5.993L17.525 3zM16.3 19h2.2L7.8 5H5.5l10.8 14z" />
                        </svg>
                      </a>
                    </li>

                    {/* LinkedIn */}
                    <li>
                      <a
                        href="https://www.linkedin.com/company/logbakai/about/?viewAsMember=true"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex justify-center items-center w-10 h-10 text-blue-900 hover:text-gray-500 bg-white rounded-full shadow transition duration-150 ease-in-out"
                        aria-label="LinkedIn">
                        <svg
                          className="w-5 h-5 fill-current"
                          viewBox="0 0 32 32"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 12h5.535v2.56h.078c.77-1.31 2.656-2.56 5.467-2.56 5.846 0 6.92 3.844 6.92 8.844V28h-5.78v-7.135c0-1.704-.03-3.9-2.378-3.9-2.38 0-2.744 1.86-2.744 3.78V28H13.32V12H12zm-7.06 0h5.78v16H4.94V12zM10 6a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </a>
                    </li>

                    {/* Instagram */}
                    <li>
                      <a
                        href="https://www.instagram.com/logbak.ai/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex justify-center items-center w-10 h-10 text-blue-900 hover:text-gray-500 bg-white rounded-full shadow transition duration-150 ease-in-out"
                        aria-label="Instagram">
                        <svg
                          className="w-5 h-5 fill-current"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.054 1.97.24 2.43.4a4.92 4.92 0 011.78 1.08 4.92 4.92 0 011.08 1.78c.16.46.345 1.26.4 2.43.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.4 2.43a4.92 4.92 0 01-1.08 1.78 4.92 4.92 0 01-1.78 1.08c-.46.16-1.26.345-2.43.4-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.43-.4a4.92 4.92 0 01-1.78-1.08 4.92 4.92 0 01-1.08-1.78c-.16-.46-.345-1.26-.4-2.43C2.212 15.784 2.2 15.4 2.2 12s.012-3.584.07-4.85c.054-1.17.24-1.97.4-2.43A4.92 4.92 0 013.75 2.94 4.92 4.92 0 015.53 1.86c.46-.16 1.26-.345 2.43-.4C8.416 1.812 8.8 1.8 12 1.8zM12 5.8a6.2 6.2 0 100 12.4 6.2 6.2 0 000-12.4zm0 10.2a4 4 0 110-8 4 4 0 010 8zm6.4-11.2a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" />
                        </svg>
                      </a>
                    </li>
                    {/* YouTube */}
                    <li>
                      <a
                        href="https://www.youtube.com/@logbakai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex justify-center items-center w-10 h-10 text-blue-900 hover:text-gray-500 bg-white rounded-full shadow transition duration-150 ease-in-out"
                        aria-label="YouTube">
                        <svg
                          className="w-5 h-5 fill-current"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center md:justify-between justify-center mx-auto px-4">
              <div className="w-full md:w-4/12 px-4 mx-auto text-center py-2">
                <div className="text-sm text-gray-600 font-semibold py-1">
                  {t("footer.copyright", { year: new Date().getFullYear() })}
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
}
export default Footer;