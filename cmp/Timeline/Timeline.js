import Image from 'next/image'
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
          'https://picsum.photos/id/10/50/50',
          'https://picsum.photos/id/20/50/50',
          'https://picsum.photos/id/30/50/50',
          'https://picsum.photos/id/40/50/50',
          'https://picsum.photos/id/10/50/50',
          'https://picsum.photos/id/20/50/50',
          'https://picsum.photos/id/30/50/50',
          'https://picsum.photos/id/40/50/50',
          'https://picsum.photos/id/10/50/50',
          'https://picsum.photos/id/20/50/50',
          'https://picsum.photos/id/30/50/50',
          'https://picsum.photos/id/40/50/50',
        ],
      },
      {
        title: 'Article 1',
        src: 'https://picsum.photos/id/440/100/100',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      {
        title: 'Article 2',
        src: 'https://picsum.photos/id/450/100/100',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        title: 'Article 3',
        src: 'https://picsum.photos/id/460/100/100',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...'
      },
    ],
  },
  {
    year: 2005,
    items: [
      {
        title: 'Photos',
        thumbs: [
          'https://picsum.photos/id/10/50/50',
          'https://picsum.photos/id/20/50/50',
          'https://picsum.photos/id/30/50/50',
          'https://picsum.photos/id/40/50/50',
          'https://picsum.photos/id/10/50/50',
          'https://picsum.photos/id/20/50/50',
          'https://picsum.photos/id/30/50/50',
          'https://picsum.photos/id/40/50/50',
          'https://picsum.photos/id/10/50/50',
          'https://picsum.photos/id/20/50/50',
          'https://picsum.photos/id/30/50/50',
          'https://picsum.photos/id/40/50/50',
          'https://picsum.photos/id/10/50/50',
          'https://picsum.photos/id/20/50/50',
          'https://picsum.photos/id/30/50/50',
          'https://picsum.photos/id/40/50/50',
        ],
      },
      {
        title: 'Article 1',
        src: 'https://picsum.photos/id/440/100/100',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
    ],
  },
  {
    year: 2006,
    items: [
      {
        title: 'Article 1',
        src: 'https://picsum.photos/id/440/100/100',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
    ],
  },{
    year: 2010,
    items: [
      {
        title: 'Article 1',
        src: 'https://picsum.photos/id/440/100/100',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
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
      {item.src && (
        <div className={styles.body}>
          <Image
            src={item.src}
            width="100"
            height="100"
          />
          <div className={styles.itemText}>{item.text}</div>
        </div>
      )}
    </div>
  ))

  return (
    <div className={styles.YearContainer}>
      <div className={`${styles.leftColumn} ${styles.yearColumn}`}>
        {side === 'left' && content}
      </div>
      <div className={styles.centerColumn}>
        <div className={styles.yearCircle}>
          <div className={styles.yearCircleText}>{year}</div>
        </div>
        <div className={styles.yearLineContainer}>
          <div className={styles.yearLine}></div>
        </div>
      </div>
      <div className={styles.rightColumn}>
        {side === 'right' && content}
      </div>
    </div>
  )
}