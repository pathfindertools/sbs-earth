
export const Footer = () => {
  return (
    <section className="relative">
      <div className={`max-w-desktop-full mx-auto text-white mg-copy-footer p-10 sm:p-5`}>
        <div className="flex flex-row sm:flex-col sm:items-start items-center gap-10 sm:gap-4">
          <div className="flex flex-row items-center gap-2 mt-4 sm:mt-0 sm:mb-4">
            <div className="sm:w-40">
              <img src="./uploads/filecoin-foundation-mark.svg" />
            </div>
            <div className="w-96 sm:w-auto">
              <p>The Sustainable Blockchain Summit is organized by Filecoin Green. Learn more at <a className="underline" target="_blank" href="https://green.filecoin.io">green.filecoin.io</a></p>
            </div>
          </div>
          <div className="flex flex-row gap-6">
            <div>
              <a style={{whiteSpace: "nowrap"}} href="https://discuss.ipfs.tech/tos">Terms of Use</a>
            </div>
            <div>
              <a style={{whiteSpace: "nowrap"}} href="https://discuss.ipfs.tech/privacy">Privacy Policy</a>
            </div>
            <div>
              <a style={{whiteSpace: "nowrap"}} href="https://ipfs.tech/legal/">DMCA Policy</a>
            </div>
          </div>
          <div className="text-right">
            <img className="ml-auto sm:ml-0 sm:mt-4" src="./uploads/protocol-one-line.svg" />
          </div>
        </div>
        <p className="text-right sm:text-left mt-6 mb-2 sm:mt-2">Made with love by <a className="underline" target="_blank" href="https://protocol.ai">Protocol Labs</a></p>
      </div>
    </section>
  );
};
