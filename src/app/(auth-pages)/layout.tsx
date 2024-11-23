import PublicHeader from "@/src/components/header-public";

export default async function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <PublicHeader />
            <div className='py-24 lg:py-32'>{children}</div>
        </>
    );
}
