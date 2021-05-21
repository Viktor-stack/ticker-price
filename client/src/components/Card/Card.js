import React, {Component} from 'react';
import s from './home.module.css'

class Card extends Component {
    color = {
        classText: "",
        classArrow: "",
        colorBg: ""
    }
    render() {
        if (this.props.tickerOld) {
            if (this.props.i.price > this.props.tickerOld.price) {
                this.color.classText = "greenText"
                this.color.classArrow = "greenArrow"
                this.color.colorBg = "#e6f4ea"
            } else if (this.props.i.price < this.props.tickerOld.price) {
                this.color.colorBg = "colorBg"
                this.color.classArrow = "redArrow"
                this.color.classText = "redText"
            }
        }
        console.log(this.props.i)
        return (
            <div className={s.lkR3Y}>
                <div className={s.vReuC + " " + s.GEykwb}>
                <span className={s.hEj6ke}>
                    <span className={s.tGqfud}>
                        <div className={s.n1rUf + " " + s.uoQxH + " " + this.color.colorBg}>
                            <span className={s.ZoIEk + " " + s.uoQxH + " " + this.color.classArrow} aria-hidden="true">
                                <svg width="16" height="16"
                                     viewBox="0 0 24 24"
                                     focusable="false"
                                     className={s.NMm5M}><path
                                    d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z">
                                     </path>
                                </svg>
                            </span>
                        </div>
                    </span>
                    <div className={s.VKMjFc}>
                        <div className={s.pKBk1e}>{this.props.i.ticker}</div>
                        <div className={s.wzUQBf}>
                            <span className={s.lh92}>
                                <span className={s.s1OkXb}>
                                    {/*{i.price > tickerOld.price ? style.green : style.red}*/}
                                    <div className={s.YMlKec + " " + this.color.classText}>{this.props.i.price}</div>
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className={s.T7Akdb}>
                        <span className={s.NydbP + " " + s.a3qxNc}>
                            <div
                                className={s.zWwE1 + " " + s.Ez2Ioe + " " + s.P2Luy + " " + s.t5mBV}>
                                <div className={s.JwB6zf + ' ' + s.V7hZne}>+{this.props.i.change_percent}%</div>
                            </div>
                        </span>
                        <div className={s.SEGxAb} style={{height: "30px"}}>
                            <div className={s.BAftM}>
                                <span className={s.P2Luy + " " + s.Ez2Ioe}>+{this.props.i.dividend}</span>
                            </div>
                        </div>
                    </div>
                </span>
                </div>
            </div>
        )

    }

}

export default Card;



