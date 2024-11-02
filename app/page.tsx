export default function Home() {
    return (
        <div className="flex flex-col">
            <p>Wewe Social Home page</p>
            <a className="cursor-pointer" href="/sign-in">
                Sing-in
            </a>
            <a className="cursor-pointer" href="/sign-up">
                Sing-up
            </a>
            <a className="cursor-pointer" href="/sign-up/business">
                Sing-up/business
            </a>
        </div>
    );
}
