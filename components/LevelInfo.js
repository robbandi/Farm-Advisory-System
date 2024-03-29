import useLevelInfo from "../useLevelInfo"
import LevelInfoLink from "./LevelInfoLink"
import styles from "../styles/Home.module.css"
import Options from "./Options"
import { useState } from "react"

const LevelInfo = ({id, level=0}) => {
    const levelInfo = useLevelInfo(id)
    const [option, setOptions] = useState(false)

    if(!levelInfo) return <span className={styles.loadText}>Loading...</span>

    const children = levelInfo.children.map(id => <p><LevelInfoLink id={id}/></p>)

    const isQuestion = !!levelInfo.answerText
    const hasAnswers = !!levelInfo.answerText
    const needsQuestions = !isQuestion && !children.length
    const needsAnswers = isQuestion && !children.length
    const isOne = !containsConditions && isQuestion

    let comment = ''
    const localPart = 'me'

    const doesContainQuestionMark = levelInfo.choiceText.includes('?')
    const doesContainFullStop = levelInfo.choiceText.includes('.')
    const doesContainComma = levelInfo.choiceText.includes(',')
    const doesContainWhat = levelInfo.choiceText.includes('What', 'Where', 'When', 'How', 'My')
    const doesContainHow = levelInfo.choiceText.includes('How')
    const doesContainMy = levelInfo.choiceText.includes('My')
    const doesContainPig = levelInfo.choiceText.includes('piglets')
    const doesContain448 = levelInfo.choiceText.includes('How long will it take for a sow to come on heat after weaning')
    const doesContain438 = levelInfo.choiceText.includes('What precaution should I take in housing farrowing sow and the piglet')
    const doesContain485 = levelInfo.choiceText.includes('I want to go into piggery but not knowledgeable on what should constitute their feed')
    const doesContain515 = levelInfo.choiceText.includes('What should be the marketing age of pigs')
    const doesContain300 = levelInfo.choiceText.includes('should')
    // const doesContain290 = levelInfo.choiceText.includes('Can I keep, raise birds of different ages in the same house')

    const containsConditions = 
    doesContainQuestionMark + 
    doesContainFullStop + 
    doesContainComma +
    doesContainWhat +
    doesContainHow +
    doesContainMy +
    doesContainPig + 
    doesContain448 + 
    doesContain438 + 
    doesContain485 +
    doesContain515 +
    doesContain300 
    // doesContain290

    const applyOptions = () => {
        if (isQuestion) comment = children.length ? '' :
        setOptions(true)
    } 

    if (!isQuestion) comment = children.length ? '' :
    <div 
    onclick
    className={styles.naWrapper}>
    <a href="mailto:click.to.reveal@email.com" onClick={e => (window.location.href = `mailto:${localPart}@${process.env.NEXT_PUBLIC_DOMAIN}`, e.preventDefault())}>
    <h1>No questions or answers for this category. If you'd like to be the first to ask. 
        Press on this item to send an email.</h1>
    </a>
    </div>    
    
    return <div className={styles.main}><div key={id} className={`level-${level}`}>
        <h1 className={containsConditions ? styles.parentIdH1Ans : styles.parentIdH1}>{levelInfo.choiceText}</h1>
        <p>{comment}</p>
        <div className={containsConditions ? styles.lvlAnswer : styles.lvlAnswerNoBg}>{isQuestion ? levelInfo.answerText : children}
        </div>
        {isOne ? <Options/> : ''}
        {/* {applyOptions} */}
        {/* <Options/> */}
    </div>
    </div>
}

export default LevelInfo