import React from 'react'
import Tabs from './components/Tabs'


const LastPage = (props) => {
  return  props.trigger ?(
    <div>
      <Tabs/>
    </div>
  ) : (
    ""
  );
}

export default LastPage
