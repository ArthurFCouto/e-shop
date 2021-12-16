import { Nav, NavButton } from "./styles";

export default function NavSugestion(props) {
    const { data, search } = props;
    
    return(
        <Nav>
            {
                data.map(item => (
                    <NavButton
                    key={item}
                    onClick={()=> search(item)}>
                        {item}
                    </NavButton>
                ))
            }
        </Nav>
    )
}