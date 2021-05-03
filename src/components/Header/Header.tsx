import React, { useState } from 'react'
import { Dropdown, Button, Menu } from "antd"
import { DownOutlined, LeftOutlined } from "@ant-design/icons"
import Link from "next/link"
import { allCategories } from '~components/Sidebar/dataStructured'
import { useDivarContext } from '~components/context/divarContext'
import styles from "./styles.module.scss"
import MenuItemsLevel2 from './MenuItemsLevel2'
import SearchBar from './Searchbar'

export const Header = ({ categoryText }) => {

  const { city } = useDivarContext()
  const [menuOpen, setMenuOpen] = useState(false)
  const [menuItemOpen, setMenuItemOpen] = useState({
    id: 0,
    isOpen: false
  })

  const { SubMenu, Item } = Menu

  const menu = (
    <Menu>
      {allCategories.children.map( ({id, slug, name, children}) =>
        <SubMenu key={id} title={`${name}`} >
          <MenuItemsLevel2 itemsToRender={children} />
        </SubMenu>
      )}
    </Menu>
    
  )
  
  return (
    <div className={styles.headerContainer}>
      <Dropdown trigger={["click"]} overlay={menu}>
        <Button>
          {categoryText} <DownOutlined />
        </Button>
      </Dropdown>

      <SearchBar categoryText={`${categoryText}`} />
    </div>
  )
}

export default Header

      // <Link key={category.id} color="textPrimary" component={RouterLink} underline="none" to={`/${city}/${category.slug}`}>
      //   <Box  className={classes.root} py={1} display="flex" justifyContent="space-between" alignItems="center" style={{cursor: "pointer"}}>
      //     <span>{category.name}</span>
      //     <LeftOutlined />
      //   </Box>
      // </Link>

// const useStyles = makeStyles((theme) => ({
//   button: {
//     margin: theme.spacing(1),
//     height: 40,
//     width: 200,
//     fontFamily: "Vazir"
//   },
//   root: {
//     "& > *": {
//       fontFamily: "Vazir"
//     }
//   }
// }));


// const history = useHistory()
//   const { pathname } = useLocation()
//   const query = useQuery()

//   const [textFieldValue, setTextFieldValue] = useState(!query.get("q") ? "" : query.get("q"))
//   const [registeredTextFieldValue, setRegisteredTextFieldValue] = useState('')

//   const { data } = useDivarContext()

//   function handleKeyPress(e: React.KeyboardEvent<HTMLDivElement>) {
//     if (e.key === "Enter") {
//       console.log(registeredTextFieldValue)
//       //@ts-ignore
//       setRegisteredTextFieldValue(textFieldValue)
//       if (textFieldValue) {
//         history.push(`${pathname}?q=${textFieldValue}`)
//       }
//     }
//   }

//   useEffect(() => {
//     if (registeredTextFieldValue && pathname !== "/" && textFieldValue) {
//       history.push(`${pathname}?q=${registeredTextFieldValue}`)
//     }
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [history, pathname])


//   const classes = useStyles();

//   return (
//     <Box display="flex" flexDirection="column" width="100%" height="fit-content" mt={13}>
//       <Box>
//         <Button
//           onClick={() => setMenuOpen(!menuOpen)}
//           variant="contained"
//           color="secondary"
//           className={classes.button}
//           endIcon={<ExpandMore />}
//         >
//           {data.title}
//         </Button>
//         <TextField className={classes.root}  onKeyDown={(e) => handleKeyPress(e)} value={textFieldValue} placeholder={`جستجو در ${!data.title ? "" : data.title}`} onChange={(e) => setTextFieldValue(e.target.value)} style={{width: "500px", fontFamily: "Vazir"}} id="outlined-basic" variant="outlined" />
//         {menuOpen && 
//           <ClickAwayListener onClickAway={() => setMenuOpen(false)}>
//             <div onClick={() => setMenuOpen(false)}>
//               <MenuItemsPaper />
//             </div>
//           </ClickAwayListener>}
//         </Box>
//         <Box>
//           <SuggestionBar />
//         </Box>
      
//     </Box>
//   )