import '../styles/OpenButton.scss';

const OpenButton = ({openTask, handleClickButton}) => {

    // const handleClick = () => {
    //     return form.remove("hidden");
    // }
    
    return(
    <button 
    type="button" 
    class="btn btn-outline-danger"
        onClick={handleClickButton}
    >+</button>
    )
}

export default OpenButton;