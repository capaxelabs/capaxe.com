import { Fragment } from 'react'
import Link from 'next/link'

export default function Text({ title }) {
  if (!title) {
    return null
  }
  return title.map((value) => {
    const {
      annotations: { bold, code, color, italic, strikethrough, underline },
      text
    } = value
    return (
      <span
        className={[bold ? 'bold' : '', code ? 'code' : '', italic ? 'italic' : '', strikethrough ? 'strikethrough' : '', underline ? 'underline' : ''].join(' ')}
        style={color !== 'default' ? { color } : {}}
        key={text.content}
      >
        {text.link ? <a href={text.link.url}>{text.content}</a> : text.content}
      </span>
    )
  })
}

export function renderBlock(block) {
  const { type, id } = block
  const value = block[type]

  switch (type) {
    case 'paragraph':
      return (
        <p>
          <Text title={value.rich_text} />
        </p>
      )
    case 'heading_1':
      return (
        <h1 className="text-3xl font-bold  mb-5 mt-5">
          <Text title={value.rich_text} />
        </h1>
      )
    case 'heading_2':
      return (
        <h2 className="text-2xl font-bold  mb-3 mt-5">
          <Text title={value.rich_text} />
        </h2>
      )
    case 'heading_3':
      return (
        <h3 className="text-2xl font-bold mb-3 mt-5">
          <Text title={value.rich_text} />
        </h3>
      )
    case 'bulleted_list': {
      return <ul>{value.children.map((child) => renderBlock(child))}</ul>
    }
    case 'numbered_list': {
      return <ol>{value.children.map((child) => renderBlock(child))}</ol>
    }
    case 'bulleted_list_item':
    case 'numbered_list_item':
      return (
        <li key={block.id}>
          <Text title={value.rich_text} />
          {/* eslint-disable-next-line no-use-before-define */}
          {!!value.children && renderNestedList(block)}
        </li>
      )
    case 'to_do':
      return (
        <div>
          <label htmlFor={id}>
            <input type="checkbox" id={id} defaultChecked={value.checked} /> <Text title={value.rich_text} />
          </label>
        </div>
      )
    case 'toggle':
      return (
        <details>
          <summary>
            <Text title={value.rich_text} />
          </summary>
          {block.children?.map((child) => (
            <Fragment key={child.id}>{renderBlock(child)}</Fragment>
          ))}
        </details>
      )
    case 'child_page':
      return (
        <div className="blockquote">
          <strong>{value?.title}</strong>
          {block.children.map((child) => renderBlock(child))}
        </div>
      )
    case 'image': {
      const src = value.type === 'external' ? value.external.url : value.file.url
      const caption = value.caption ? value.caption[0]?.plain_text : ''
      return (
        <figure className="my-4 rounded-sm">
          <img src={src} alt={caption} />
          {caption && <figcaption>{caption}</figcaption>}
        </figure>
      )
    }
    case 'divider':
      return <hr key={id} />
    case 'quote':
      return (
        <blockquote className="p-4 my-4 border-s-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800" key={id}>
          {value.rich_text[0].plain_text}
        </blockquote>
      )
    case 'code':
      return (
        <pre className="">
          <code className="card-block" key={id}>
            {value.rich_text[0].plain_text}
          </code>
        </pre>
      )
    case 'file': {
      const srcFile = value.type === 'external' ? value.external.url : value.file.url
      const splitSourceArray = srcFile.split('/')
      const lastElementInArray = splitSourceArray[splitSourceArray.length - 1]
      const captionFile = value.caption ? value.caption[0]?.plain_text : ''
      return (
        <figure>
          <div className="file">
            📎{' '}
            <Link href={srcFile} passHref>
              {lastElementInArray.split('?')[0]}
            </Link>
          </div>
          {captionFile && <figcaption>{captionFile}</figcaption>}
        </figure>
      )
    }
    case 'bookmark': {
      const href = value.url
      return (
        <a href={href} target="_blank" rel="noreferrer noopener" className="bookmark">
          {href}
        </a>
      )
    }
    case 'table': {
      return (
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <tbody>
            {block.children?.map((child, index) => {
              const RowElement = value.has_column_header && index === 0 ? 'th' : 'td'
              return (
                <tr key={child.id}>
                  {child.table_row?.cells?.map((cell, i) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <RowElement key={`${cell.plain_text}-${i}`}>
                      <Text title={cell} />
                    </RowElement>
                  ))}
                </tr>
              )
            })}
          </tbody>
        </table>
      )
    }
    case 'column_list': {
      return <div className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">{block.children.map((childBlock) => renderBlock(childBlock))}</div>
    }
    case 'column': {
      return <div>{block.children.map((child) => renderBlock(child))}</div>
    }
    default:
      return `❌ Unsupported block (${type === 'unsupported' ? 'unsupported by Notion API' : type})`
  }
}

export function renderNestedList(blocks) {
  const { type } = blocks
  const value = blocks[type]
  if (!value) return null

  const isNumberedList = value.children[0].type === 'numbered_list_item'

  if (isNumberedList) {
    return <ol>{value.children.map((block) => renderBlock(block))}</ol>
  }
  return <ul>{value.children.map((block) => renderBlock(block))}</ul>
}
