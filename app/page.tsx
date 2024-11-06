export default function Home() {
    return (
        <div className="flex flex-col">
            <p>Wewe Social Home page</p>
            <a className="cursor-pointer" href="/auth/login">
                Sing-in
            </a>
            <a className="cursor-pointer" href="/auth/register">
                Sing-up
            </a>
            <a className="cursor-pointer" href="/auth/sign-up/business">
                Sing-up/business
            </a>
        </div>
    );
}
