function Footer() {
  return (
    <>
      <div className="app_bg">
        {/* seperator */}
        <div
          className="h-2 max-w-6xl w-full mx-auto bg-gray-600"
          aria-hidden="true"
        />

        <div className="flex flex-1 justify-start items-center max-w-6xl mx-auto py-2 pr-5 pl-5 bg-black/60 text-white">
          <div className="">
            <p>
              Built by{" "}
              <a
                href="https://github.com/jared-ruiz"
                target="_blank"
                className="font-medium underline underline-offset-4 hover:text-blue-400"
              >
                Jared R
              </a>
              . The source code is available on{" "}
              <a
                href="https://github.com/jared-ruiz"
                target="_blank"
                rel="noreferrer"
                className="font-medium underline underline-offset-4 hover:text-blue-400"
              >
                GitHub
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
