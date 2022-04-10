import { Line, NavButton } from "./styles";

export default function NavSugestion(props) {
    const { sugestions, search } = props;

    return (
        <Line>
            {
                sugestions.map(item => (
                    <NavButton
                        key={item}
                        onClick={() => search(item)}>
                        {item}
                    </NavButton>
                ))
            }
        </Line>
    )
}