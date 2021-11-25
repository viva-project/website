import styles from '../../styles/Timeline.module.css'

function isEven(n) {
  return n % 2 === 0;
}

const data = [
  {
    year: 2001,
    items: [
      {
        title: 'Photos',
        thumbs: [
          'https://picsum.photos/id/10/50/50',
          'https://picsum.photos/id/20/50/50',
          'https://picsum.photos/id/30/50/50',
          'https://picsum.photos/id/40/50/50',
        ],
      },
      {
        title: 'Article 1',
      },
      {
        title: 'Article 2',
      },
      {
        title: 'Article 3',
      },
    ],
  },
  {
    year: 2005,
    items: [
      {
        title: 'Photos',
      },
    ],
  },
  {
    year: 2006,
    items: [
      {
        title: 'Photos',
      },
    ],
  },{
    year: 2010,
    items: [
      {
        title: 'Photos',
      },
    ],
  },
]

export const Timeline = () => (
  <div className={styles.Timeline}>
    {data.map((year, yearIdx) => (
      <YearContainer
        key={yearIdx}
        side={isEven(yearIdx) ? 'left' : 'right'}
        year={year.year}
        items={year.items}
      />
    ))}
  </div>
)

const YearContainer = ({year, items, side}) => {
  const content = items.map((item, itemIdx) => (
    <div
      key={itemIdx}
      className={styles.yearItem}
    >
      <h3>{item.title}</h3>
      {item.thumbs && item.thumbs.map((thumb, thumbIdx) => (
        <img
          key={thumbIdx}
          src={thumb}
          alt={thumb}
        />
      ))}
    </div>
  ))

  return (
    <div className={styles.YearContainer}>
      <div className={styles.leftColumn}>
        {side === 'left' && content}
      </div>
      <div className={styles.centerColumn}>
        <div className={styles.yearCircle}>{year}</div>
      </div>
      <div className={styles.rightColumn}>
        {side === 'right' && content}
      </div>
    </div>
  )
}