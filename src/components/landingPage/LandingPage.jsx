import React from "react";
import styles from "./Welcome.module.css";
import Animation from "../coffeeAnimation/Animation";

export default function LandingPage () {
    return (
        <div>
            <div className={styles.body}>
                <div className={styles.backgroundOne}>
                    <h1>Welcome here !</h1>
                </div>
                <div className={styles.coffeePic}> <Animation /> </div>
                <div className={styles.backgroundTwo}>
                    <h1>Titre 2</h1>
                </div>
            </div>
        </div>
    )
}