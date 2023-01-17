/**
 * This is the typescript interfaces for our JSON data
 * //todo add typings to sanitized data
 * There are several 'helper' interfaces that break out some duplicate code
 * The remaining interfaces correlate to the mongoose schemas
 */

/**
 * Below are the helper interfaces
 * They include: {@link numWrongCellsPlayedPerStrategy}
 * {@link strategyTypes} and {@link moves}
 * // todo refactor strategyTypes to strategies
 * @module Interfaces
 *
 */
interface numWrongCellsPlayedPerStrategy {
    NAKED_SINGLE: number,
    HIDDEN_SINGLE: number,
    NAKED_PAIR: number,
    NAKED_TRIPLET: number,
    NAKED_QUADRUPLET: number,
    NAKED_QUINTUPLET: number,
    NAKED_SEXTUPLET: number,
    NAKED_SEPTUPLET: number,
    NAKED_OCTUPLET: number,
    HIDDEN_PAIR: number,
    HIDDEN_TRIPLET: number,
    HIDDEN_QUADRUPLET: number,
    HIDDEN_QUINTUPLET: number,
    HIDDEN_SEXTUPLET: number,
    HIDDEN_SEPTUPLET: number,
    HIDDEN_OCTUPLET: number,
    POINTING_PAIR: number,
    POINTING_TRIPLET: number,
    BOX_LINE_REDUCTION: number,
    X_WING: number,
    SWORDFISH: number,
    SINGLES_CHAINING: number
}

interface strategyTypes {
    NAKED_SINGLE: boolean,
    HIDDEN_SINGLE: boolean,
    NAKED_PAIR: boolean,
    NAKED_TRIPLET: boolean,
    NAKED_QUADRUPLET: boolean,
    NAKED_QUINTUPLET: boolean,
    NAKED_SEXTUPLET: boolean,
    NAKED_SEPTUPLET: boolean,
    NAKED_OCTUPLET: boolean,
    HIDDEN_PAIR: boolean,
    HIDDEN_TRIPLET: boolean,
    HIDDEN_QUADRUPLET: boolean,
    HIDDEN_QUINTUPLET: boolean,
    HIDDEN_SEXTUPLET: boolean,
    HIDDEN_SEPTUPLET: boolean,
    HIDDEN_OCTUPLET: boolean,
    POINTING_PAIR: boolean,
    POINTING_TRIPLET: boolean,
    BOX_LINE_REDUCTION: boolean,
    X_WING: boolean,
    SWORDFISH: boolean,
    SINGLES_CHAINING: boolean
}

interface moves {
    moveNumber: number,
    row: number,
    column: number,
    value: number,
    moveTime: number
}

/**
 * Below are the interfaces for the Mongo schemas
 * They include: {@link Puzzle}, {@link UserProfile}, {@link UserGameStatistics}
 * {@link UserGameSearchFilters}, {@link userPausedGames}, and {@link userGameHistory}
 * //todo make casing of types consistant
 *
 */
export interface Puzzle {
    puzzle: string,
    puzzleSolution: string,
    strategies: strategyTypes,
    difficulty: number,
    fastestSolveTime: number,
    averageSolveTime: number,
    numUsersPlayed: number,
    numTimesPlayed: number,
    trulyUnique: boolean,
    drillStrategies: strategyTypes,
    calendarDate?: Date,
    imageUrl?: string,
    description?: string
}

export interface UserProfile {
    userId: string,
    userEmail: string,
    userName: string,
    userPreferences: {
        savePuzzleData: boolean,
        theme: string,
        gamePreferences: {
            notifyOnWrongCell: boolean,
            highlightAllSelectedNumber: boolean,
            highlightSelectedBox: boolean,
            highlightSelectedRow: boolean,
            playMusic: boolean,
            musicIntensify: boolean
        }
    }
}

export interface UserGameStatistics {
    userId: string,
    gameStatistics: {
        averageSolveTime: number,
        fastestSolveTime: number,
        averageMoveTime: number,
        numHintsAskedFor: number,
        numWrongCellsPlayed: number,
        numCorrectCellsPlayed: number,
        numGamesPlayed: number,
        numWrongCellsPlayedPerStrategy: numWrongCellsPlayedPerStrategy
    }
}

export interface UserGameSearchFilters {
    userId: string,
    gameSearchPreferences: {
        defaultSearchType: string,
        difficulty: {
            low: number,
            high: number
        },
        strategyTypes: strategyTypes
    }
}

export interface userPausedGames {
    userId: string,
    inProgressGames: [{
        puzzle: string,
        currentTime: number,
        moves: moves[],
        numHintsAskedFor: number,
        numWrongCellsPlayed: number,
        numCorrectCellsPlayed: number,
        numWrongCellsPlayedPerStrategy: numWrongCellsPlayedPerStrategy
    }]
}

export interface userGameHistory {
    userId: string,
    gamesPlayed: [{
        puzzle: string,
        moves: moves[],
        numTimesPlayed: number,
        initialSolveTime: number,
        fastestSolveTime: number,
        averageMoveTime: number,
        numHintsAskedFor: number,
        numWrongCellsPlayed: number,
        numCorrectCellsPlayed: number,
        numWrongCellsPlayedPerStrategy: numWrongCellsPlayedPerStrategy
    }]
}