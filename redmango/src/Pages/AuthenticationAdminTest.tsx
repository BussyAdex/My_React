import React from 'react'
import { withAdminAuth } from '../HOC'

function AuthenticationAdminTest() {
  return (
    <div>
      This page is for admin only
    </div>
  )
}

export default withAdminAuth(AuthenticationAdminTest);
