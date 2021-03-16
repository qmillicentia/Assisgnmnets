import Button from '../Button';
import Navbar from '../navbar';
import Checkbox from '../checkbox';
import Inputfield from '../inputfield';
import Radiobutton from '../radiobutton';
import Selectopition from '../selectopition';
import Textarea from '../textarea';
import Typography from '../typography';


function Home() {


    return(
        <div>
            <Navbar text="TWINITECH IT SOLUTION " color="#14a37f"/>
            <h1>My Components</h1>
            <Button text="Checkbox" color="#8bc34a"/>
            <Button text="Inputfield" color="#2979ff"/>
            <Button text="Navbar" color="#9c27b0"/>
            <Button text="Radiobutton" color="#af52bf"/>
            <Button text="Selectionopition" color="##ffea00"/>
            <Button text="Textarea" color="#fff391"/>
            <Button text="Typography"color="#1c2566"/>
            <Checkbox />
            <Inputfield />
            <Radiobutton />
            <Selectopition />
            <Textarea />
            <Typography />

        </div>
    )
}

export default Home; 