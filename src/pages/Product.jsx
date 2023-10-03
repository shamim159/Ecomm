import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";

const Container=styled.div``;
const Wrapper=styled.div`
    padding: 50px;
    display: flex;
    ${mobile({ padding: "10px", flexDirection: "column"  })} 

`;
const ImgContainer=styled.div`
    flex: 1;
`;

const Image=styled.img`
    width: 100%;
    height: 50vh;
    object-fit: cover;
    ${mobile({ height: "40vh" })} 
`;

const InfoContainer=styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({ padding: "10px" })}
`;

const Title=styled.h1`
    font-weight: 200;
`;

const Desc=styled.p`
    margin: 20px 0px;
`;

const Price=styled.span`
    font-weight: 100;
    font-size: 40px;
`;

const FilterContainer=styled.div`
width: 50%;
margin: 30px 0px;
display: flex;
justify-content: space-between;
${mobile({ width: "100%" })}
`;

const Filter=styled.div`
display: flex;
align-items: center;
`;

const FilterTitle=styled.span`
font-size: 20px;
font-weight: 200;
`;

const FilterColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=>props.color};
margin: 0px 5px;
cursor: pointer;
`;

const FilterSpec=styled.select`
margin-left: 10px;
padding: 5px;
`;

const FilterSpecOption=styled.option``;

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ width: "100%" })}

`;
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;
const Amount=styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: opx 5px;
`;
const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

 &:hover{
     background-color: #f8f4f4;
 }
`;






const Product = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <ImgContainer>
                    <Image src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/urus/Urus_cc-giallo_auge-Taigete_23_Shiny_Black-black_caliper-sceneplate_env.png" />
                </ImgContainer>
                <InfoContainer>
                    <Title>Lamborghini URUS</Title>
                    <Desc>The lorem ipsum is a placeholder text used in publishing and graphic design. 
                    This filler text is a short paragraph that contains all the letters of the alphabet. 
                    The characters are spread out evenly so that the reader's attention is focused on the 
                    layout of the text instead</Desc>
                    <Price>$ 160,000</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black"/>
                            <FilterColor color="blue"/>
                            <FilterColor color="gray"/>
                        </Filter>
                        <Filter>
                            <FilterTitle>Spec</FilterTitle>
                            <FilterSpec>
                                <FilterSpecOption>Comfort</FilterSpecOption>
                                <FilterSpecOption>Sport</FilterSpecOption>
                                <FilterSpecOption>Beast</FilterSpecOption>
                            </FilterSpec>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove/>
                            <Amount>1</Amount>
                            <Add/>
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter/>
            <Footer/>
        </Container>
    )
};

export default Product;
