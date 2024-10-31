const ErrorBoundary = () => {
    return (
        <div className="w-full h-[600px] border-t flex flex-col items-center justify-center">
            <div className="w-fit h-fit flex flex-col items-center justify-center gap-[30px] pb-[60px]">
                <img className="w-[600px] -ml-[70px] rounded-[12px]" src="/Woof.png" alt="notfound"/>
                <p className="text-gray-400 font-Poppins text-[42px] leading-[32px]" ><span>404 </span>Not Found</p>
            </div>
        </div>
    )
}
export default ErrorBoundary
