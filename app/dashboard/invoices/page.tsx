export default function Page({params}: {params: {user: string}}) {
    return <h1>Invoice for {params.user}</h1>
}