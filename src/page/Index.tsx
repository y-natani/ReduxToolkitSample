import React, { Suspense } from 'react'
import Route from 'src/route'

import { Box } from '@material-ui/core'

// export default () => JSX では、fast refreshが効かないことがある

export const Index = () => {
  return (
    <Box m={1}>
      <Suspense fallback={<div>Loading...</div>}>
        <Route />
      </Suspense>
    </Box>
  )
}

export default Index
