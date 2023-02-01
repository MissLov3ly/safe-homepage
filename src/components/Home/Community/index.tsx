import { Container, Grid, Typography } from '@mui/material'
import type { ReactElement } from 'react'

import css from './styles.module.css'
import layoutCss from '@/components/common/styles.module.css'
import type { BaseBlock } from '@/components/Home/types'

const Community = ({ caption, title, text, items }: BaseBlock): ReactElement => {
  return (
    <Container>
      <Grid container className={layoutCss.container} spacing="30px">
        <Grid item md={1} />
        <Grid item md={5}>
          <Typography variant="caption" component="div" mb={2}>
            {caption}
          </Typography>
          <Typography variant="h2" mb={{ xs: 2, md: 4 }}>
            {title}
          </Typography>
          <Typography variant="body2" color="primary.light">
            {text}
          </Typography>
        </Grid>
        <Grid item md={1} display={{ xs: 'none', md: 'block' }} />
        <Grid item md={5}>
          <div className={css.metricWrapper}>
            {items &&
              items.map((item, index) => (
                <div key={'metric-' + index}>
                  <p className={css.metric}>{item.title}</p>
                  <Typography variant="caption">{item.text}</Typography>
                </div>
              ))}
          </div>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Community
