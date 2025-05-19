import Button from "./components/atoms/Button.tsx";

export default function App() {
    return (
        <div className={"min-h-screen"}>
            <div>
                <div>VARIANT</div>
                <Button variant={"outlined"}>Button</Button>
                <Button variant={"solid"}>Button</Button>
                <Button variant={"text"}>Button</Button>

                <div>COLOR</div>
                <Button variant={"outlined"} color={"primary"}>Button</Button>
                <Button variant={"solid"} color={"gray"}>Button</Button>
                <Button variant={"text"} color={"error"}>Button</Button>
                <Button variant={"text"} color={"info"}>Button</Button>
                <Button variant={"text"} color={"white"}>Button</Button>

            </div>
        </div>
    );
}

