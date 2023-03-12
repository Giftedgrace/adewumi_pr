import React from 'react';

function SelectLang(){
    return(
        <form>
           <label htmlfor="languages" className="lang-label">Choose Language</label>
           <select name="language" id="language" className="lang-select">
            <option value="english">Eng</option>
            <option value="arabic">ع</option>
            <option value="german">De</option>
          </select>
        </form>
 
 
    )
 }
 
 
 export default SelectLang