import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter className="px-4">
      <div>
        <span className="ms-1">Copyright &copy; 飛鵝數位電訊FT All Rights Reserved.</span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
