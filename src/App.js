import {NavItem,HeaderItem,FormsItem} from "./components/components/Expenseitem"

const App = ()=> {
    const expenses = {
        heading1:'About Catering',
        heading2:'Tradition since 1889',
        description1:'The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use',
        description2:'Bangalore'
    }
    return ( 
    <div>
        <NavItem />
        <HeaderItem heading1={expenses.heading1}  heading2={expenses.heading2}  description1={expenses.description1}  description2={expenses.description2}  />
        <FormsItem />
     </div >
    );
}

export default App;