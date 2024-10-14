import {
    Html,
    Head,
    Button,
    Container,
    Heading,
    Hr,
    Text,
    Tailwind,
    Preview,
    Link,
    Section
} from "@react-email/components";

interface ContactEmailProps {
    data: {
        name: string;
        email: string;
        message: string;
        contactMethod?: string;
    };
}

const ContactEmail = ({data}: ContactEmailProps) => {
    const mailTo = `mailto:${data.email}`;

    const previewText = `New message from ${data.name}`;

    return (
        <Html>
            <Head />
            <Preview>{previewText}</Preview>
            <Tailwind>
                <Container className="bg-white my-auto mx-auto font-sans px-2">
                    <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
                        <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
                            New message from {data.name}
                        </Heading>
                        <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
                        <Text className="text-black text-[14px] leading-[24px]">
                            <strong>{data.name}</strong> (
                            <Link
                                href={`mailto:${data.email}`}
                                className="text-blue-600 no-underline"
                            >
                                {data.email}
                            </Link>
                            ) has sent you a message:&nbsp;
                            <strong>{data.message}</strong>.
                        </Text>
                        {data.contactMethod && (
                            <Text className="text-black text-[14px] leading-[24px]">
                                They would like to be contacted via <strong>{data.contactMethod}</strong>.
                            </Text>
                        )}
                        <Section className="text-center mt-[32px] mb-[32px]">
                            <Button
                                className="bg-[#000000] rounded text-white text-[12px] font-semibold no-underline text-center px-5 py-3"
                                href={mailTo}
                            >
                                Reply to {data.name}
                            </Button>
                        </Section>
                        <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
                    </Container>
                </Container>
            </Tailwind>
        </Html>
    );
}

export default ContactEmail;
