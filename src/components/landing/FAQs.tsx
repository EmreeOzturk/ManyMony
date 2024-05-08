import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/src/components/ui/accordion"
const FAQs = () => {
    return (
        <div className="max-w-7xl w-full ">
            <div className="bg-gradient-to-br from-slate-200 to-slate-500 text-transparent tracking-tight  bg-clip-text text-center text-4xl  py-4 font-medium   md:text-7xl ">
                <h1>FAQs</h1>
            </div>
            <Accordion type="single" collapsible className="w-full" >
                <AccordionItem value="item-1" >
                    <AccordionTrigger>Is your app free to use?</AccordionTrigger>
                    <AccordionContent>
                        Yes, our app is completely free to use. You can access basic features for free and optionally upgrade to a premium plan for additional features you need.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>Which devices is it compatible with?</AccordionTrigger>
                    <AccordionContent>
                        Since our app is web-based, it can be accessed through any web browser. Additionally, we have mobile apps available for iOS and Android devices.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>How can I integrate my bank accounts into the app?</AccordionTrigger>
                    <AccordionContent>
                        You can securely integrate your bank accounts into our app. Simply navigate to the account settings section within the app and select "Bank Accounts" to add your bank accounts.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger>Are my data secure?</AccordionTrigger>
                    <AccordionContent>
                        User security is our priority. All your data is protected with strong encryption methods, and your privacy is always guaranteed. Moreover, our app follows regularly updated security protocols.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                    <AccordionTrigger>What are the advantages of the premium plan?</AccordionTrigger>
                    <AccordionContent>
                        Our premium plan provides access to more advanced features. These features include customized reports, automatic bill reminders, and expanded data storage space, among others.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default FAQs