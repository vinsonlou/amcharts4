/**
 * Pointed rectangle module.
 */
/**
 * ============================================================================
 * IMPORTS
 * ============================================================================
 * @hidden
 */
import { PointedShape, IPointedShapeProperties, IPointedShapeAdapters, IPointedShapeEvents } from "../../core/elements/PointedShape";
/**
 * ============================================================================
 * REQUISITES
 * ============================================================================
 * @hidden
 */
/**
 * Defines properties for [[PointedCircle]].
 */
export interface IPointedCircleProperties extends IPointedShapeProperties {
    /**
     * Radius of a pin, in pixels.
     *
     * @default 0
     */
    radius?: number;
    /**
     * Angle of a pointer, in degrees.
     *
     * @default 90
     */
    pointerAngle?: number;
}
/**
 * Defines events for [[PointedCircle]].
 */
export interface IPointedCircleEvents extends IPointedShapeEvents {
}
/**
 * Defines adapters for [[PointedCircle]].
 *
 * @see {@link Adapter}
 */
export interface IPointedCircleAdapters extends IPointedShapeAdapters, IPointedCircleProperties {
}
/**
 * ============================================================================
 * MAIN CLASS
 * ============================================================================
 * @hidden
 */
/**
 * Draws a circle with a pointer.
 *
 * @see {@link IPointedCircleEvents} for a list of available events
 * @see {@link IPointedCircleAdapters} for a list of available Adapters
 */
export declare class PointedCircle extends PointedShape {
    /**
     * Defines available properties.
     */
    _properties: IPointedCircleProperties;
    /**
     * Defines available adapters.
     */
    _adapter: IPointedCircleAdapters;
    /**
     * Defines available events.
     */
    _events: IPointedCircleEvents;
    /**
     * Constructor
     */
    constructor();
    /**
     * Draws the element.
     *
     * @ignore Exclude from docs
     */
    draw(): void;
    /**
     * @return Radius (px)
     */
    /**
     * Radius of a circle in pixels.
     *
     * @default 0
     * @param value  Radius (px)
     */
    radius: number;
    /**
     * @return Angle of a pointer, in degrees.
     */
    /**
     * Angle of a pointer, in degrees.
     * @default 90
     * @param value Angle (degrees)
     */
    pointerAngle: number;
}
