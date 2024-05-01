/*
* The Jet class.
*
* @author  Evgeny Vovk
* @version 1.0
* @since   2024-04-30
*/
import { Airplane } from "./Airplane"

/**
* This is the jet class.
*/
export class Jet extends Airplane {
    // variables
    private MULTIPLIER: number = 2

    /**
     * Constructor.
     */
    public constructor() {
        super()
    }

    /**
     * Sets the speed of the jet.
     */
    public setSpeed(speed: number) {
        super.setSpeed(speed * this.MULTIPLIER)
    }

    /**
     * Accelerates the jet.
     */
    public accelerate() {
        super.setSpeed(super.getSpeed() * 2)
    }
}
